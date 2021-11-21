import styles from './AccordionContent.module.scss';

function AccordionContent({ applications }) {
    const getlink = (e) => e.currentTarget.querySelector("a").click();

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Application name</th>
                    <th>Author</th>
                    <th>Version</th>
                </tr>
            </thead>
            <tbody>
                {applications.map(application => (
                    <tr key={application.id} id={application.app} onClick={getlink}>
                        <td><a href={`#${application.app}`}>{application.app}</a></td>
                        <td>{application.author?.name}</td>
                        <td>{application.version}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default AccordionContent;