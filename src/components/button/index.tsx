import Link from "next/link";

interface ButtonProps {
  title: string;
  url: string;
}

export default function Button(props: ButtonProps) {
  const { title, url } = props;

  return (
    <div
      style={{
        padding: "12px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#C22821",
        marginLeft: "16px",
      }}
    >
      <Link href={url}>{title}</Link>
    </div>
  );
}
