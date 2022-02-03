interface Score {
  playerScore: number[];
  totalScore: number;
}

export const Scoreboard: React.FC<Score> = ({
  playerScore,
  totalScore,
}): JSX.Element => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {[...Array(10)].map((e: number, i: number) => {
                    return (
                      <th
                        key={i}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {" "}
                        P {i + 1}{" "}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Info Here */}
                <tr>
                  {playerScore.map((scores) => (
                    <td
                      className="px-6 py-4 whitespace-nowrap"
                      key={Math.random()}
                    >
                      {scores}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <p className="px-6 py-5 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
          TOTAL : {totalScore}
        </p>
      </div>
    </div>
  );
};
