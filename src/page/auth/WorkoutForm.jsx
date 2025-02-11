import { useState } from "react";

const WorkoutForm = () => {
  const [workout, setWorkout] = useState({
    name: "",
    slug: "",
    banner: "",
    level: "",
    week: "",
    daysPerWeek: "",
    goal: "",
    type: "",
    plan: [],
  });

  const [newDay, setNewDay] = useState({
    day: "",
    dayName: "",
    target: "",
    exercise: [],
  });

  const [newExercise, setNewExercise] = useState({
    exerciseId: "",
    name: "",
    gif: "",
    set: "",
    rest: "",
    reps: "",
  });

  // Cập nhật thông tin chung
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout((prev) => ({
      ...prev,
      [name]: value,
      slug:
        name === "name" ? value.toLowerCase().replace(/\s/g, "-") : prev.slug,
    }));
  };

  // Cập nhật thông tin ngày tập
  const handleDayChange = (e) => {
    const { name, value } = e.target;
    setNewDay((prev) => ({ ...prev, [name]: value }));
  };

  // Cập nhật thông tin bài tập
  const handleExerciseChange = (e) => {
    const { name, value } = e.target;
    setNewExercise((prev) => ({ ...prev, [name]: value }));
  };

  // Thêm bài tập vào ngày tập
  const addExercise = () => {
    setNewDay((prev) => ({
      ...prev,
      exercise: [...prev.exercise, newExercise],
    }));
    setNewExercise({
      exerciseId: "",
      name: "",
      gif: "",
      set: "",
      rest: "",
      reps: "",
    });
  };

  // Thêm ngày tập vào kế hoạch
  const addDay = () => {
    setWorkout((prev) => ({
      ...prev,
      plan: [...prev.plan, newDay],
    }));
    setNewDay({ day: "", dayName: "", target: "", exercise: [] });
  };

  // Gửi dữ liệu lên Server
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    // try {
    //   const response = await fetch("https://your-api.com/workouts", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(workout),
    //   });
    //   const data = await response.json();
    //   alert("Thêm lịch tập thành công!");
    // } catch (error) {
    //   console.error("Lỗi khi gửi dữ liệu:", error);
    // }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-bold mb-4">Thêm Lịch Tập Mới</h2>
      <div className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Tên lịch tập"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="banner"
          placeholder="Link ảnh banner"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="level"
          placeholder="Mức độ (Beginner, Intermediate...)"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="week"
          placeholder="Số tuần"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="daysPerWeek"
          placeholder="Số ngày tập mỗi tuần"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="goal"
          placeholder="Mục tiêu (Tăng cơ, giảm mỡ...)"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <h3 className="text-lg font-semibold mt-6">Thêm Ngày Tập</h3>
      <div className="space-y-3">
        <input
          type="number"
          name="day"
          placeholder="Thứ tự ngày (1,3,5...)"
          onChange={handleDayChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="dayName"
          placeholder="Tên ngày (Thứ hai...)"
          onChange={handleDayChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="target"
          placeholder="Mục tiêu (Toàn thân...)"
          onChange={handleDayChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="button"
          onClick={addDay}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Thêm ngày tập
        </button>
      </div>

      <h3 className="text-lg font-semibold mt-6">Thêm Bài Tập</h3>
      <div className="space-y-3">
        <input
          type="text"
          name="exerciseId"
          placeholder="ID bài tập"
          onChange={handleExerciseChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="name"
          placeholder="Tên bài tập"
          onChange={handleExerciseChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="gif"
          placeholder="GIF bài tập"
          onChange={handleExerciseChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="set"
          placeholder="Số set"
          onChange={handleExerciseChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="rest"
          placeholder="Thời gian nghỉ"
          onChange={handleExerciseChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="reps"
          placeholder="Số reps"
          onChange={handleExerciseChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="button"
          onClick={addExercise}
          className="w-full bg-green-500 text-white p-2 rounded"
        >
          Thêm bài tập
        </button>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-purple-600 text-white p-3 rounded-lg font-semibold"
      >
        Gửi lên server
      </button>
    </form>
  );
};

export default WorkoutForm;
