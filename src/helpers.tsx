export const offsetScrollTo = (id: string, e: React.MouseEvent) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -64; // NavBar height
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
