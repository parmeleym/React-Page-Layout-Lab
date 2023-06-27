export default function Header({className, heading}) {
    return (
      <div>
        <p className={className}>{heading}</p>
      </div>
    );
  }