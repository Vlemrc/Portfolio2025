export default function Echoes() {
    return (
        <>
            <h3 className="pt-12 uppercase text-[10px] font-bold pb-5">My echoes</h3>
            <iframe 
                data-testid="embed-iframe" 
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/2oKOGvdJ5BQEiguaSQJJpc?utm_source=generator&theme=0" 
                width="100%" 
                height="90"
                className="w-2/3"
                frameBorder="0" 
                scrolling="no"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
            </iframe>
            <iframe
                data-testid="embed-iframe"
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/6NiRlK5sphGYxU4UPVlN4p?utm_source=generator&theme=0"
                width="100%"
                height="90"
                className="w-2/3"
                frameBorder="0"
                scrolling="no"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
        </>
    )
}