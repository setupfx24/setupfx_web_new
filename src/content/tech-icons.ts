/**
 * The technologies shown in the ticker, with their official brand marks in full colour.
 * The files are the `-original` artwork from the Devicon set, served from
 * `public/images/tech` as separate documents rather than inlined: several carry gradient
 * definitions whose ids would collide once the strip renders its second copy.
 */

export type TechIcon = {
  name: string;
  src: string;
};

export const techIcons: TechIcon[] = [
  { name: "React", src: "/images/tech/react.svg" },
  { name: "JavaScript", src: "/images/tech/javascript.svg" },
  { name: "Rust", src: "/images/tech/rust.svg" },
  { name: "Python", src: "/images/tech/python.svg" },
  { name: "C++", src: "/images/tech/cplusplus.svg" },
  { name: "Go", src: "/images/tech/go.svg" },
  { name: "PHP", src: "/images/tech/php.svg" },
  { name: "Laravel", src: "/images/tech/laravel.svg" },
  { name: "MongoDB", src: "/images/tech/mongodb.svg" },
  { name: "PostgreSQL", src: "/images/tech/postgresql.svg" },
  { name: "Flutter", src: "/images/tech/flutter.svg" },
];
