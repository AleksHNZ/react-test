
function MyButton({count, onClick}) {
    return(
        <button onClick={onClick}>
            Button has been touched {count} times
        </button>
    )
}

export default MyButton