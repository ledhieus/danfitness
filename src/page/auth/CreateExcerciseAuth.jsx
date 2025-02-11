import { useEffect, useState } from "react";
import { getMuscleList } from "../../service/muscle";
import { postExerciseList } from "../../service/exercise";

const CreateExcerciseAuth = () => {
  const [muscleList, setMuscleList] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    img: "",
    muschleId: "",
    primary: "",
  });
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getMuscleList("");
      console.log(data);
      setMuscleList(data);
    };
    fetchApi();
  }, []);
  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "name") {
      value = value.replaceAll("-", " ");
    }
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postExerciseList(formData);
      alert("Bài tập đã được tạo thành công! 🎉");
      setFormData({ name: "", slug: "", img: "", muschleId: "", primary: "" }); // Reset form
    } catch (error) {
      alert("Có lỗi xảy ra, vui lòng thử lại!");
      console.error("Lỗi khi tạo bài tập:", error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Tạo bài tập</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium">
              Tên bài tập
            </label>
            <input
              name="name"
              type="text"
              className="border border-gray-300 rounded-lg w-full p-2"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Tên Slug</label>
            <input
              name="slug"
              type="text"
              className="border border-gray-300 rounded-lg w-full p-2"
              value={formData.slug}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Link ảnh</label>
            <input
              name="img"
              type="text"
              className="border border-gray-300 rounded-lg w-full p-2"
              value={formData.img}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Nhóm cơ chính
            </label>
            <input
              name="primary"
              type="text"
              className="border border-gray-300 rounded-lg w-full p-2"
              value={formData.primary}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Các nhóm cơ tác động
            </label>
            <select
              name="muschleId"
              className="border border-gray-300 rounded-lg w-full p-2"
              value={formData.muschleId}
              onChange={handleChange}
            >
              {muscleList.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Tạo bài tập
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateExcerciseAuth;
