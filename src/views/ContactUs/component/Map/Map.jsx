const { useTheme } = require("@mui/material")

const Map = () => {
    const theme = useTheme();

    return (
        <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.4376967606995!2d-82.7421814842706!3d28.07218888264214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2f28355bbc133%3A0xa5ea837595445497!2s33024%20US%20Hwy%2019%20N%2C%20Palm%20Harbor%2C%20FL%2034684%2C%20USA!5e0!3m2!1sen!2sit!4v1675349558403!5m2!1sen!2sit"
            style={{
            minHeight: 400,
            filter:
                theme.palette.mode === 'dark'
                ? 'grayscale(0.5) opacity(0.7)'
                : 'none',
            }}
        />
    )
}

export default Map;