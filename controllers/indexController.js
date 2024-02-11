export const home = (req, res) => {
  res.render("index", {
    title: "Home - Relonpx",
    layout: "layouts/main-layout",
  });
};

export default (home);
