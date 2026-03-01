const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const getAllImages = async (req, res) => {
  const dirName = req.query.dirName;
  if (!dirName) res.status(400).json({ error: "Empty directory name!" });
  try {
    const result = await cloudinary.search
      .expression(`folder:"${dirName}"`)
      .execute();

    const imageUrls = result.resources.map((file) => {
      const url = file.secure_url || "";
      return url.includes("/upload/")
        ? url.replace("/upload/", "/upload/f_auto,q_auto/")
        : url;
    });
    res.status(200).json({ urls: imageUrls });
  } catch (error) {
    console.error("Error fetching from Cloudinary:", error.error.message);
    res.status(500).json({ error: "Failed to fetch images" });
  }
};

module.exports = { getAllImages };
