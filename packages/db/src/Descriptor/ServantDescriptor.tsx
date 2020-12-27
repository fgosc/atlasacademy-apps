import {Region, Servant} from "@atlasacademy/api-connector";
import React from "react";
import {Link} from "react-router-dom";
import ClassIcon from "../Component/ClassIcon";
import FaceIcon from "../Component/FaceIcon";
import './Descriptor.css';

interface IPropsCommon {
    region: Region;
    servant: Omit<Servant.ServantBasic, 'face'>;
    iconHeight?: number;
}

function CommonServantDescriptor (props : IPropsCommon & { face?: string }) {
    return (
        <Link
            to={`/${props.region}/servant/${props.servant.collectionNo}`}
            style={{textDecoration: "none", whiteSpace: "nowrap"}}
        >
            <ClassIcon className={props.servant.className}
                       rarity={props.servant.rarity}
                       height={props.iconHeight}/>
            {' '}
            {props.face && <FaceIcon location={props.face}
                                    rarity={props.servant.rarity}
                                    type={props.servant.type} />}
            {' '}
            <span className="hoverText" style={{whiteSpace: "normal"}}>
                {props.servant.name}
            </span>
        </Link>
    )
}

interface IProps extends IPropsCommon {
    servant: Servant.Servant;
}

class ServantDescriptor extends React.Component<IProps> {
    private faceIconLocation(): string | undefined {
        const assetBundle = this.props.servant.extraAssets.faces;

        if (assetBundle.ascension) {
            const asset = Object.values(assetBundle.ascension).shift();

            if (asset)
                return asset;
        }

        if (assetBundle.costume) {
            const asset = Object.values(assetBundle.costume).shift();

            if (asset)
                return asset;
        }

        return undefined;
    }

    render() {
        return <CommonServantDescriptor {...this.props} face={this.faceIconLocation()}/>
    }
}

interface IPropsBasic extends IPropsCommon {
    servant: Servant.ServantBasic;
}

function BasicServantDescriptor (props : IPropsBasic) {
    return <CommonServantDescriptor {...props} face={props.servant.face}/>
}

export default ServantDescriptor;
export { BasicServantDescriptor };
