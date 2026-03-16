document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  const jsonData = {};
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });

  try {
    const response = await fetch("http://localhost:5000/api/resume", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jsonData)
    });

    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "resume.pdf";
    link.click();
  } catch (err) {
    alert("Something went wrong while generating the resume!");
    console.error(err);
  }
});
