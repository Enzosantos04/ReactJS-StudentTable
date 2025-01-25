import { students } from "@/data/data";

export function Table() {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Grade 1</th>
            <th>Grade 2</th>
            <th>Final Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <img
                    className="h-5 rounded-full"
                    src={item.avatar}
                    alt={item.name}
                  />
                  <br />
                  {item.name} <br />
                  {item.email}
                </td>
                <td>
                  {item.active === false ? (
                    <p className="inactive">Inactive</p>
                  ) : (
                    <p className="active">Active</p>
                  )}
                </td>
                <td>{item.grade1}</td>
                <td>{item.grade2}</td>
                <td>
                  {item.active
                    ? ((item.grade1 + item.grade2) / 2).toFixed(1)
                    : "--"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
