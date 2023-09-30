export const useCounter = () => {
    const counter = useState<number>("counter", () => 0);
    const plus = () => {
        counter.value++;
    };
    const minus = () => {
        counter.value--;
    };
      return { counter, plus, minus };
}