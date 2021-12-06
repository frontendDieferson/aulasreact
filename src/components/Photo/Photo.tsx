type Props = {
    url: string
    legend: string
}

export const Photo = ({url, legend}:Props) => {
    return (
        <>
            <img src={url} />
            <p>{legend}</p>
        </>
    )
}