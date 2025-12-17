// Function to convert a "YYYY-MM-DD" date string into Japanese format "YYYY年M月D日"
export const formatJP = (dateString) => {
  if (!dateString) return "";

  const [y, m, d] = dateString.split("-");

  return (
    <>
      <span className="latin">{y}</span>
      <span className="jp">年</span>
      <span className="latin">{parseInt(m)}</span>
      <span className="jp">月</span>
      <span className="latin">{parseInt(d)}</span>
      <span className="jp">日</span>
    </>
  );
};

// Function to return the corresponding design standard text based on the given key
export const getDesignStandardText = (value) => {
  switch (value) {
    case "act":
      return "Standard Acts. (Law)";
    case "tower":
      return "Tower Standard";
    case "jil":
      return "JIL日本照明器具工業会規格等に準拠する。";
    case "haiden":
      return "Haiden";
    default:
      return "";
  }
};
