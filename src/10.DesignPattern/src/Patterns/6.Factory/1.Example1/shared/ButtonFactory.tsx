import DangerButton from "../components/DangerButton";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

export default function ButtonFactory(type: string, label: string){

    switch(type) {
        case 'primary':
            return <PrimaryButton label={label} />
        case 'secondary':
            return <SecondaryButton label={label}/>
        case 'danger':
            return <DangerButton label={label}/>
        default:
            return <PrimaryButton label={label}/>
    }
}