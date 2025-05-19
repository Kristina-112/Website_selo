export default function ContentsDropdown({contents, visible}) {
    return (
        <div className={`contents_menu ${visible ? 'visible' : ''}`}>

            {contents.map((content, index) =>
                <li
                    onClick={() => {
                        const el = document.getElementById(String(index+1));
                        if (el) el.scrollIntoView({behavior: 'smooth'});
                    }}
                >
                    {content}
                </li>
            )}

        </div>
    );
}