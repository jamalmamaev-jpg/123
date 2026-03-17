import Layout from "@/components/Layout";
import { resorts } from "@/data/mockData";
import { Check, X, Star } from "lucide-react";

const ResortComparison = () => {
  return (
    <Layout>
      <div className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Compare Resorts</h1>
          <p className="text-white/60 text-xl max-w-2xl">Find the perfect match for your skill level and budget.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-6 text-left bg-gray-50 rounded-tl-3xl border-b border-gray-200">Feature</th>
              {resorts.map(resort => (
                <th key={resort.id} className="p-6 text-center border-b border-gray-200 min-w-[200px]">
                  <img src={resort.image} alt={resort.name} className="h-20 w-full object-cover rounded-xl mb-4" />
                  <p className="font-bold text-primary">{resort.name}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-6 font-bold text-primary border-b border-gray-100">Ski Area Size</td>
              {resorts.map(resort => (
                <td key={resort.id} className="p-6 text-center border-b border-gray-100">{resort.skiAreaSize} km</td>
              ))}
            </tr>
            <tr>
              <td className="p-6 font-bold text-primary border-b border-gray-100">Lifts</td>
              {resorts.map(resort => (
                <td key={resort.id} className="p-6 text-center border-b border-gray-100">{resort.lifts}</td>
              ))}
            </tr>
            <tr>
              <td className="p-6 font-bold text-primary border-b border-gray-100">Difficulty</td>
              {resorts.map(resort => (
                <td key={resort.id} className="p-6 text-center border-b border-gray-100">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">{resort.difficulty}</span>
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-6 font-bold text-primary border-b border-gray-100">Rating</td>
              {resorts.map(resort => (
                <td key={resort.id} className="p-6 text-center border-b border-gray-100">
                  <div className="flex items-center justify-center">
                    <Star className="h-4 w-4 text-accent fill-current mr-1" /> {resort.rating}
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-6 font-bold text-primary border-b border-gray-100">Price Level</td>
              {resorts.map(resort => (
                <td key={resort.id} className="p-6 text-center border-b border-gray-100 font-bold text-secondary">{resort.priceLevel}</td>
              ))}
            </tr>
            <tr>
              <td className="p-6 font-bold text-primary border-b border-gray-100">Video Bonus</td>
              {resorts.map(resort => (
                <td key={resort.id} className="p-6 text-center border-b border-gray-100">
                  <Check className="h-6 w-6 text-green-500 mx-auto" />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default ResortComparison;