function Button(props) {
  return (
    <button
    onClick={props.onClick}
      style={{
        background: props.bgclr,
        color: props.clr,
        border: props.border,
        cursor: 'pointer',
        fontSize: props.fontSize,
        margin: props.margin,
        padding: '10px',
        borderRadius: '10px',
      }}
    >
      {props.text}
    </button>
  );
}

export default Button;
