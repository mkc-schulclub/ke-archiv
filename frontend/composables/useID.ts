export function useID() {
    function id(name: String) {
        return name.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
    }
  
    return {
      id,
    };
  }
  