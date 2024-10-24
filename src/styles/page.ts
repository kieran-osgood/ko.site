export const pageBounds =
  "w-full sm:max-w-xl md:max-w-3xl lg:max-w-7xl self-center";

export const highlightCurrentPage = (selectors: string) => {
  const anchors = document.querySelectorAll<HTMLAnchorElement>(selectors);

  for (const _ of anchors) {
    if (_.pathname === "/" && window.location.pathname !== "/") {
      continue;
    }

    if (window.location.pathname.startsWith(_.pathname)) {
      _.classList.add("text-primary", "dark:text-primary"); // important used to override default text color
      break; // we only want to attach highlight to first node
    }
  }
};
