interface SpacerProps {
    height: number | string;
}

function Spacer({ height }: SpacerProps) {
    const heightValue = typeof height === 'number' ? `${height}px` : height;
    return <div style={{ height: heightValue }}></div>;
}

export default Spacer;
