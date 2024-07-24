import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p className="p-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque culpa
        laudantium atque vero a, provident harum corporis architecto dolorem
        illum magnam quod qui expedita saepe, animi ipsa. Harum, necessitatibus
        officiis?
      </p>
      <Link href="/contact">Contact Us</Link>
    </div>
  );
}
