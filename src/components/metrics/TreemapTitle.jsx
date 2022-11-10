import React from "react";
import treemapImg from "../assets/treemap.svg";

const TreemapTitle = () => {
  return (
    <div className="p-2 border border-[#f1f1f1] rounded-md mb-4 flex justify-start items-center w-[150px] max-w-[150px]">
      <img src={treemapImg} alt="" />
      <a
        href="https://googlechrome.github.io/lighthouse/treemap/?gzip=1#H4sIAAAAAAAACq2WS2/bRhDHv4rBsynu+2EgCJr60EtOrk9FD8OZWXldimRJyoJh6Lt3JacXWUqaQgBBcDkP/rgz/A/fqu5pqu7eqon/3vK8MD1OXXVXPS3LON81zW63Ww1Ec8/LCodNU91WKffQ/dALtpSX+ZB5ximPS71MzBsYa4IFDrczlQTnbLfVkpeOi/XhaL35/d16c/9uJX6PykNffB5npps0TDffctzAOBanGYeppOi3XfdtcZ/nsYPXrwMdUue+xGxgyS98TLlA7o60y+t4sJ8Q9SWqmP94q3rY8PfffOJ52E7IX16XQ4yOUur97Q8jd2ONQ79wvzQI+MRNetk0m9w30jknvXAi1M8zYmIOqCgSStcmNqiUItW6wBpClIIkCwFRG+nABi1kTIBSk3WWVs/zR8AQnVe31bbflq38F1rZKK8G7QJEtInJJy8hecc+WeuFVilZaoVxoKzFpK33FkjrFkCxsmwc0XnosqdBn0Lb4H6Oeey269zPDQ7DX5nrDnb1oTGajteAr824bbuMzfMHh/rdUsg+v/D0Sa/ESn9kFBdg1sOw7vjIMjHCuOATNDDmsy96Kcn/qEJMRkrlQrKIImhffFuhNQFobL1npZ0i8pEgRe0wCiWE1VhqFNGcr4LR4qQIUobrNQ4aFbzFGFHGYFqZKLA3TlgUAMFTSK0uzQ+GUQF4YwUJEzmkWBLEs8gleTxBNtJe7wOF6KMXSQhvufBqjjGFAtdap5JLhIotepTW+CCiaSOjswg+cVn588hGhA/Mzl5RVZIGImXYBC2D06QRtDdBBM9SpMQgo0sedVIYrSfjlUwt0qFBzAXo4GI8hS6frI9Xg26LSlgTY9E1oW2rpNNWJlZtUklRET+hdDkSGrKsk04yQgRA60IRmvP9bL08YXbmJzXlO8QSZDj2R+lUhRwltyIVIW9ZAguFppyUipwiYFFtKznaovKhbS3ZcH6bhTvV7gvSnTew5nlFG4Qj8hegsm7uv/76y/HyN+5GnlYF+uyDSsOdPOe/KBNSX+M6N+8Te24s2qIwKjTYDVtKHUxcz0sZw9iUcZu7mhjLqL1IIZU+bSop/f7P/X5/W5UKpLx+4GXJ/fo4zLsB4fgnwX39+FAVr38Af/lDdvAIAAA="
        rel="noreferrer"
        target="_blank"
        className="text-[#0066ff] text-[14px] ml-2 font-semibold"
      >
        View Treemap
      </a>
    </div>
  );
};

export default TreemapTitle;
