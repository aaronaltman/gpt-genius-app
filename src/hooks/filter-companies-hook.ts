import { useEffect, useState } from "react";

export function useFeedbackItems(companies: any[]) {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [filteredFeedbackItems, setFilteredFeedbackItems] = useState([]);
  const [companyName, setCompanyName] = useState("");

  useEffect(() => {
    const filteredItems = feedbackItems.filter((item) => {
      return item.companyName.toLowerCase().includes(companyName.toLowerCase());
    });
    setFilteredFeedbackItems(filteredItems);
  }, [companyName, feedbackItems]);

  return {
    filteredFeedbackItems,
    setFeedbackItems,
    setCompanyName,
  };
}
