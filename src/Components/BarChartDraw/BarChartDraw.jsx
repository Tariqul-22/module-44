import { BarChart, Bar, Rectangle, XAxis, YAxis, Tooltip, Legend } from 'recharts';


const BarChartDraw = () => {
    const studentMarksData = [
        { id: 1, name: "John Doe", math: 85, chemistry: 75 },
        { id: 2, name: "Jane Smith", math: 78, chemistry: 80 },
        { id: 3, name: "Michael Johnson", math: 92, chemistry: 88 },
        { id: 4, name: "Emily Brown", math: 65, chemistry: 70 },
        { id: 5, name: "Daniel Wilson", math: 70, chemistry: 72 },
        { id: 6, name: "Sarah Davis", math: 88, chemistry: 85 },
        { id: 7, name: "Ryan Taylor", math: 75, chemistry: 68 },
        { id: 8, name: "Emma Martinez", math: 80, chemistry: 78 },
        { id: 9, name: "Matthew Anderson", math: 83, chemistry: 82 },
        { id: 10, name: "Olivia Garcia", math: 79, chemistry: 77 },
        { id: 11, name: "David Rodriguez", math: 90, chemistry: 92 },
        { id: 12, name: "Ava Hernandez", math: 73, chemistry: 65 },
        { id: 13, name: "William Smith", math: 85, chemistry: 79 },
        { id: 14, name: "Sophia Johnson", math: 68, chemistry: 70 },
        { id: 15, name: "Isabella Brown", math: 72, chemistry: 75 }
    ];
    return (
        <div>
            <h3 className='text-2xl text-center font-bold mt-20'>Bar Chart</h3>

            <BarChart width={600} height={400} data={studentMarksData}>
                <Bar dataKey="math" fill="red" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                <Bar dataKey="chemistry" fill="green" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                <XAxis dataKey="id" />
                <YAxis />
                <Tooltip />
                <Legend />
            </BarChart>
        </div>
    );
};

export default BarChartDraw;