const Section = ({id, title, level = 2, children}) => {
    const Heading = `h${level}`

    return (
        <section className="section">
            <Heading id={id}
                className={`section__heading section__heading_level-${level}`}>
                {title}
            </Heading>
            <div className="content">
                {children}
            </div>
        </section>
    );
};

export default Section;