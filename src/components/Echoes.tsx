export default function Echoes() {
    return (
        <>
            <h3 className="pt-12 uppercase text-[10px] font-bold pb-5">My echoes</h3>
            <iframe
                data-testid="embed-iframe"
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/playlist/1uowCt1nschyYJbujear78?utm_source=generator"
                width="70%"
                height="200"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
        </>
    )
}