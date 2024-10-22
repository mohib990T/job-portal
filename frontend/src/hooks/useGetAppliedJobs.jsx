import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setAllAppliedJobs } from "@/redux/slices/jobSlice";

const useGetAppliedJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const res = await axios.get(`https://job-portal-y9gc.onrender.com/api/v1/application/get`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setAllAppliedJobs(res.data.application));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAppliedJobs();
  }, []);
};

export default useGetAppliedJobs;
