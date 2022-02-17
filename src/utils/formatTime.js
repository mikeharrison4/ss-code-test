const formatTime = (time) => (
  ("0" + (Math.floor(time) % 24)).slice(-2) +
  ":" +
  ((time % 1) * 60 + "0").slice(0, 2) +
  `${Math.floor(time) >= 12 ? "pm" : "am"}`
)

export default formatTime;