function AlertCard({title,location,agency}:{title:string,location:string,agency:string}){
    return(
        <article>
            <h3>{title}</h3>
            <p>{location}</p>
            <p>{agency}</p>
        </article>
    );
}

export default function AlertList(){
    return(
       <aside>
            <p>Results:</p>
            <ul>
                <li>
                    <AlertCard
                        title="fire warning"
                        location="Wollondilly LGA"
                        agency="RFS"
                    />
                </li>
            </ul>
       </aside>
    );
}