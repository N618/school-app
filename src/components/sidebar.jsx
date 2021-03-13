
export default function SideBar( {listGroup}) {

    return (
        <ul class="list-group">
            { listGroup.map( listItem => 
                <li 
                className = {listItem._id === 1 ? 'list-group-item active borderless activeBoarder' : 'list-group-item borderless' }
                style={{borderRadius: "0px 15px 15px 0px"}} 
                >
                    <span className={`mr-3 ${listItem.iconClass}`}></span>
                    {listItem.label}
                </li> 
            )}
            
        </ul>

    );
}