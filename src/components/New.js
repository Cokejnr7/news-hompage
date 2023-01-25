import Post from "./Post";

const New = ({title})=>{
    return (
        <aside className="articles">
            <h1 className="new">New</h1>
            <Post/>
        </aside>
    )
}

export default New;