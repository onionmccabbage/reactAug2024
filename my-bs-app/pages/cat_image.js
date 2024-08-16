const CatImage = ({cat})=>{
    return (
        <>
        <img src={cat.url} alt={`${cat.id} ${cat.url}`} width='64' />
        </>
    )
}
export default CatImage