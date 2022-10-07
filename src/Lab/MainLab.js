import DynamicProperty from "./componets/DynamicProperty/DynamicProperty";
import Hello from "./componets/Hello/Hello";
import HtmlTags from "./componets/HtmlTags/HtmlTags";
import Fragments from "./componets/JsxFragments/Fragments";
import MappingCollection from "./componets/MappingCollection/MappingCollection";
import NamespaceComponents, { First } from "./componets/NamespaceComponents/NamespaceComponents";
import NestedElements from "./componets/NestedElements/NestedElements";
import Props from "./componets/Properties/Props";
import InitialState from "./componets/State/InitialState";
import MergeCompState from "./componets/State/MergeCompState";
import State from "./componets/State/State";
import TagConvention from "./componets/TagConvention/TagConvention";
import UiStructure from "./componets/UiStructure/UiStructure";

const MainLab = () =>{
    return(
        <div>
            <Hello/>
            <HtmlTags />
            <TagConvention />
            <UiStructure />
            <NestedElements />
            <NamespaceComponents>
                <NamespaceComponents.First />
                <NamespaceComponents.Second />
            </NamespaceComponents>
            <First  />
            <DynamicProperty />
            <MappingCollection />
            <Fragments />
            <Props data={5} />
            <InitialState />
            <State />
            <MergeCompState />
        </div>
    )
}
export default MainLab;