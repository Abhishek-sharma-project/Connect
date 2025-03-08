import { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Abhishek Sharma",
    bio: "Web Developer",
    skills: ["React", "JavaScript", "Tailwind CSS"],
    image: "image.jpg",
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ name: user.name, bio: user.bio });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser({ ...user, name: formData.name, bio: formData.bio });
    setEditMode(false);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center my-3">
      <img
        src={user.image}
        alt="Profile"
        className="mx-auto w-24 h-24 rounded-full border-4 border-blue-500 shadow-md"
      />

      {editMode ? (
        <div className="mt-4 space-y-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <button
            onClick={handleSave}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save
          </button>
        </div>
      ) : (
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {user.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">{user.bio}</p>

          <ul className="mt-3 flex justify-center gap-2">
            {user.skills.map((skill, index) => (
              <li
                key={index}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setEditMode(true)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
