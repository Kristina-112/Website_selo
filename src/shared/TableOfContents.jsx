export default function TableOfContents({contents, visible}) {
    return (
        <nav className={`toc__items ${visible ? 'visible' : ''}`}>
            <ul>
                {contents.map(({id, title}) => (
                    <li key={id}>
                        <a href={`#${id}`}
                        >
                            {title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}