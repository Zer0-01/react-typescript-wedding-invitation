interface RsvpSummaryProps {
    label: string,
    value: string
}

const RsvpSummary = ({ label, value }: RsvpSummaryProps) => {
    return (
        <div><span className="fw-bold">{label}: </span><span>{value}</span> </div>
    );
}

export default RsvpSummary;