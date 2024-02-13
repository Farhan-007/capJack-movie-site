import React from 'react'

function SinglePage() {
    return (
        <>
            <div style={vidStyle}>
                <iframe title='title' src="https://vidsrc.xyz/embed/movie/385687" allow="autoplay; fullscreen" allowfullscreen="yes" frameborder="0" style={{ width: "100%", height: "100%", overflow: "hidden", borderRadius: "inherit" }} ></iframe>
            </div>
        </>
    )
}

const vidStyle = {
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    width: "60dvw",
    aspectRatio : "5/3",
    borderRadius : "1rem"
}

export default SinglePage
