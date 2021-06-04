import { Region, War } from "@atlasacademy/api-connector";
import { AxiosError } from "axios";
import diacritics from "diacritics";
import minimatch from "minimatch";
import React from "react";
import {
    Col,
    Form,
    Pagination,
    Row,
    Table,
    ButtonGroup,
    Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Api from "../Api";
import ErrorStatus from "../Component/ErrorStatus";
import Loading from "../Component/Loading";
import Manager from "../Setting/Manager";

import "./CraftEssencesPage.css";

enum WarType {
    MAIN = "Main Story",
    CHALDEA_GATE = "Chaldea Gate",
    OTHER = "Other",
}

interface ChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

interface IProps {
    region: Region;
}

interface IState {
    error?: AxiosError;
    loading: boolean;
    wars: War.WarBasic[];
    activeWarTypeFilters: WarType[];
    perPage: number;
    page: number;
    search?: string;
}

class WarsPage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            loading: true,
            wars: [],
            activeWarTypeFilters: [],
            perPage: 50,
            page: 0,
        };
    }

    componentDidMount() {
        try {
            Manager.setRegion(this.props.region);
            document.title = `[${this.props.region}] Wars - Atlas Academy DB`;
            Api.warList().then((list) => {
                this.setState({
                    loading: false,
                    wars: list,
                });
            });
        } catch (e) {
            this.setState({
                error: e,
            });
        }
    }

    private toggleWarTypeFilter(warType: WarType): void {
        if (this.state.activeWarTypeFilters.includes(warType)) {
            this.setState({
                activeWarTypeFilters: this.state.activeWarTypeFilters.filter(
                    (activeType) => activeType !== warType
                ),
            });
        } else {
            this.setState({
                activeWarTypeFilters: [
                    ...this.state.activeWarTypeFilters,
                    warType,
                ],
            });
        }
    }

    private wars(): War.WarBasic[] {
        let list = this.state.wars.sort((a, b) => a.id - b.id);

        if (this.state.activeWarTypeFilters.length > 0) {
            list = list.filter((war) => {
                return (
                    (this.state.activeWarTypeFilters.includes(WarType.MAIN) &&
                        war.id <= 1000) ||
                    (this.state.activeWarTypeFilters.includes(
                        WarType.CHALDEA_GATE
                    ) &&
                        1000 < war.id &&
                        war.id <= 2000) ||
                    (this.state.activeWarTypeFilters.includes(WarType.OTHER) &&
                        2000 < war.id)
                );
            });
        }

        if (this.state.search) {
            const glob = diacritics
                .remove(this.state.search.toLowerCase())
                .split(" ")
                .filter((word) => word)
                .join("*");

            list = list.filter((war) => {
                const normalizedName = diacritics.remove(
                    `${war.name} ${war.longName}`
                        .replace("\n", " ")
                        .toLowerCase()
                );
                const searchName = `${war.id} ${normalizedName}`;

                return searchName.match(new RegExp(glob, "g"));
            });
        }

        return list;
    }

    private pageItem(
        label: string,
        page: number,
        key: string | number,
        active: boolean,
        disabled: boolean
    ) {
        return (
            <li
                key={key}
                className={
                    "page-item" +
                    (active ? " active" : "") +
                    (disabled ? " disabled" : "")
                }
            >
                {disabled ? (
                    <span className={"page-link"}>{label}</span>
                ) : (
                    <button
                        className={"page-link"}
                        onClick={() => this.setPage(page)}
                    >
                        {label}
                    </button>
                )}
            </li>
        );
    }

    private paginator(count: number): JSX.Element {
        const items = [],
            maxPage = Math.ceil(count / this.state.perPage) - 1,
            bounds = 2,
            nearbyPrev = [],
            nearbyNext = [],
            nearbyCount = bounds * 2 + 1;

        for (let i = 0; i < bounds * 2; i++) {
            const prev = this.state.page - i - 1;
            if (prev >= 0) {
                nearbyPrev.unshift(prev);
            }

            const next = this.state.page + i + 1;
            if (next <= maxPage) {
                nearbyNext.push(next);
            }
        }

        while (nearbyPrev.length + nearbyNext.length + 1 > nearbyCount) {
            if (nearbyNext.length > nearbyPrev.length) {
                nearbyNext.pop();
            } else {
                nearbyPrev.shift();
            }
        }

        const pages = nearbyPrev.concat([this.state.page], nearbyNext);

        items.push(
            this.pageItem(
                "<",
                this.state.page - 1,
                "prev",
                false,
                this.state.page <= 0
            )
        );

        if (pages[0] > 0) {
            items.push(this.pageItem("1", 0, "first", false, false));

            if (pages[0] === 2) {
                items.push(this.pageItem("2", 1, 1, false, false));
            } else if (pages[0] > 2) {
                items.push(this.pageItem("…", 0, "firstEllipsis", false, true));
            }
        }

        items.push(
            ...pages.map((i) =>
                this.pageItem(
                    (i + 1).toString(),
                    i,
                    i,
                    i === this.state.page,
                    false
                )
            )
        );

        const lastNearbyPage = pages[pages.length - 1];
        if (lastNearbyPage < maxPage) {
            if (lastNearbyPage === maxPage - 2) {
                items.push(
                    this.pageItem(
                        maxPage.toString(),
                        maxPage - 1,
                        maxPage - 1,
                        false,
                        false
                    )
                );
            } else if (lastNearbyPage < maxPage - 2) {
                items.push(
                    this.pageItem("…", maxPage, "lastEllipsis", false, true)
                );
            }

            items.push(
                this.pageItem(
                    (maxPage + 1).toString(),
                    maxPage,
                    "last",
                    false,
                    false
                )
            );
        }

        items.push(
            this.pageItem(
                ">",
                this.state.page + 1,
                "next",
                false,
                this.state.page >= maxPage
            )
        );

        return (
            <div>
                <Pagination>{items}</Pagination>
            </div>
        );
    }

    private setPage(page: number) {
        this.setState({ page });
    }

    render() {
        if (this.state.error) return <ErrorStatus error={this.state.error} />;

        if (this.state.loading) return <Loading />;

        const wars = this.wars(),
            results = wars.slice(
                this.state.perPage * this.state.page,
                this.state.perPage * (this.state.page + 1)
            );

        const pageNavigator = this.paginator(wars.length);

        return (
            <div id={"craft-essences"}>
                <Row>
                    <Col
                        md={12}
                        lg={4}
                        style={{ justifyContent: "left", marginBottom: "1rem" }}
                    >
                        <ButtonGroup style={{ width: "100%" }}>
                            {[
                                WarType.MAIN,
                                WarType.CHALDEA_GATE,
                                WarType.OTHER,
                            ].map((warType) => {
                                return (
                                    <Button
                                        variant={
                                            this.state.activeWarTypeFilters.includes(
                                                warType
                                            )
                                                ? "success"
                                                : "outline-dark"
                                        }
                                        key={warType}
                                        onClick={(_) =>
                                            this.toggleWarTypeFilter(warType)
                                        }
                                    >
                                        {warType.toString()}
                                    </Button>
                                );
                            })}
                        </ButtonGroup>
                    </Col>
                    <Col
                        md={12}
                        lg={3}
                        style={{ marginLeft: "auto", marginBottom: "1rem" }}
                    >
                        <Form inline style={{ width: "100%" }}>
                            <Form.Control
                                style={{ marginLeft: "auto", width: "100%" }}
                                placeholder={"Search"}
                                value={this.state.search ?? ""}
                                onChange={(ev: ChangeEvent) => {
                                    this.setState({
                                        search: ev.target.value,
                                        page: 0,
                                    });
                                }}
                            />
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <div style={{ float: "right" }}>{pageNavigator}</div>
                    </Col>
                </Row>
                <hr style={{ marginTop: 0 }} />

                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center", width: "1px" }}>
                                #
                            </th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((war) => {
                            const route = `/${this.props.region}/war/${war.id}`;

                            return (
                                <tr key={war.id}>
                                    <td align={"center"}>
                                        <Link to={route}>{war.id}</Link>
                                    </td>
                                    <td>
                                        <Link to={route}>{war.longName}</Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>

                <div style={{ float: "right" }}>{pageNavigator}</div>
            </div>
        );
    }
}

export default WarsPage;
