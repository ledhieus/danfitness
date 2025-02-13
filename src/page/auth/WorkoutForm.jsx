
import { postWorkout } from "../../service/workout";
import Input from "./Input";
import { useState } from "react";

const WorkoutForm = () => {
  const [sessions, setSessions] = useState([]);
  const [workoutInfo, setWorkoutInfo] = useState({
    name: "",
    slug: "",
    banner: "",
    level: "beginner",
    week: "",
    daysPerWeek: "",
    goal: "",
    type: "body-weight",
  });

  const handleChange = (e) => {
    setWorkoutInfo({ ...workoutInfo, [e.target.name]: e.target.value });
  };

  const handleSessionChange = (sessionId, field, value) => {
    setSessions((prev) =>
      prev.map((s) => (s.id === sessionId ? { ...s, [field]: value } : s))
    );
  };

  const handleExerciseChange = (sessionId, exerciseId, field, value) => {
    setSessions((prev) =>
      prev.map((session) =>
        session.id === sessionId
          ? {
              ...session,
              exercises: session.exercises.map((ex) =>
                ex.id === exerciseId ? { ...ex, [field]: value } : ex
              ),
            }
          : session
      )
    );
  };

  const addSession = () => {
    setSessions([...sessions, { id: Date.now(), target: "", exercises: [] }]);
  };

  const addExercise = (sessionId) => {
    setSessions((prev) =>
      prev.map((session) =>
        session.id === sessionId
          ? {
              ...session,
              exercises: [
                ...session.exercises,
                {
                  id: Date.now(),
                  name: "",
                  sets: "",
                  reps: "",
                  rest: "",
                  gif: "",
                },
              ],
            }
          : session
      )
    );
  };

  const removeExercise = (sessionId, exerciseId) => {
    setSessions((prev) =>
      prev.map((session) =>
        session.id === sessionId
          ? {
              ...session,
              exercises: session.exercises.filter((ex) => ex.id !== exerciseId),
            }
          : session
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedData = {
      id: Date.now().toString(),
      ...workoutInfo,
      plan: sessions.map((session) => ({
        day: session.day,
        slug: `day-${session.day}`,
        dayName: `Ngày ${session.day}`,
        target: session.target,
        exercise: session.exercises.map((exercise) => ({
          exerciseId: exercise.id.toString(),
          gif: exercise.gif,
          name: exercise.name,
          set: exercise.sets,
          rest: exercise.rest,
          reps: exercise.reps,
        })),
      })),
    };
    try {
          await postWorkout(formattedData);
          alert("Lịch tập đã được tạo thành công! 🎉");
          setSessions([]); // Reset form
        } catch (error) {
          alert("Có lỗi xảy ra, vui lòng thử lại!");
          console.error("Lỗi khi tạo bài tập:", error);
        }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Tạo lịch tập</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <Input
            title="Title"
            name="name"
            onChange={handleChange}
            value={workoutInfo.name}
          />
          <Input
            title="Slug"
            name="slug"
            onChange={handleChange}
            value={workoutInfo.slug}
          />
          <Input
            title="Banner"
            name="banner"
            onChange={handleChange}
            value={workoutInfo.banner}
          />

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Trình độ
            </label>
            <select
              name="level"
              onChange={handleChange}
              value={workoutInfo.level}
              className="w-full border rounded-lg p-2"
            >
              <option value="beginner">Beginner</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <Input
            title="Tập bao nhiêu tuần"
            name="week"
            onChange={handleChange}
            value={workoutInfo.week}
          />
          <Input
            title="Bao nhiêu buổi 1 tuần"
            name="daysPerWeek"
            onChange={handleChange}
            value={workoutInfo.daysPerWeek}
          />
          <Input
            title="Mục tiêu"
            name="goal"
            onChange={handleChange}
            value={workoutInfo.goal}
          />

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Tập ở đâu
            </label>
            <select
              name="type"
              onChange={handleChange}
              value={workoutInfo.type}
              className="w-full border rounded-lg p-2"
            >
              <option value="body-weight">Tại nhà</option>
              <option value="gym">Gym</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Lịch tập chi tiết
          </h3>
          <button
            type="button"
            onClick={addSession}
            className="text-blue-600 font-medium hover:text-blue-800 mb-4"
          >
            + Thêm buổi tập
          </button>

          {sessions.map((session) => (
            <div
              key={session.id}
              className="mt-4 space-y-3 bg-gray-100 p-4 rounded-lg"
            >
              <Input
                title="Ngày"
                value={session.day || ""}
                onChange={(e) =>
                  handleSessionChange(session.id, "day", e.target.value)
                }
              />
              <Input
                title="Mục tiêu"
                value={session.target}
                onChange={(e) =>
                  handleSessionChange(session.id, "target", e.target.value)
                }
              />

              <div className="bg-white p-4 rounded-lg shadow">
                <button
                  type="button"
                  onClick={() => addExercise(session.id)}
                  className="text-green-600 font-medium hover:text-green-800"
                >
                  + Thêm bài tập
                </button>

                <div className="mt-3 grid grid-cols-2 gap-4">
                  {session.exercises.map((exercise) => (
                    <div
                      key={exercise.id}
                      className="border p-3 rounded-lg bg-gray-50 relative"
                    >
                      <button
                        type="button"
                        onClick={() => removeExercise(session.id, exercise.id)}
                        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                      >
                        🗑️
                      </button>
                      <Input
                        title="Gif"
                        value={exercise.gif}
                        onChange={(e) =>
                          handleExerciseChange(
                            session.id,
                            exercise.id,
                            "gif",
                            e.target.value
                          )
                        }
                      />
                      <Input
                        title="Tên bài"
                        value={exercise.name}
                        onChange={(e) =>
                          handleExerciseChange(
                            session.id,
                            exercise.id,
                            "name",
                            e.target.value
                          )
                        }
                      />
                      <Input
                        title="Số set"
                        value={exercise.sets}
                        onChange={(e) =>
                          handleExerciseChange(
                            session.id,
                            exercise.id,
                            "sets",
                            e.target.value
                          )
                        }
                      />
                      <Input
                        title="Số rep"
                        value={exercise.reps}
                        onChange={(e) =>
                          handleExerciseChange(
                            session.id,
                            exercise.id,
                            "reps",
                            e.target.value
                          )
                        }
                      />
                      <Input
                        title="Thời gian nghỉ"
                        value={exercise.rest}
                        onChange={(e) =>
                          handleExerciseChange(
                            session.id,
                            exercise.id,
                            "rest",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-red-700 text-white py-2 font-bold text-[18px] rounded-md hover:bg-red-500"
        >
          Tạo
        </button>
      </form>
    </div>
  );
};

export default WorkoutForm;
