import axios from "axios";
import {
  FETCH_USER,
  FETCH_ORDERS,
  FETCH_ALL_ORDERS,
  FETCH_CLIENTS,
  FETCH_TRUCKS,
  FETCH_DRIVERS,
  FETCH_ZONES,
  FETCH_SCHEDULES,
  FETCH_SCHEDULE,
  FETCH_ORDER,
  FETCH_METRICS
} from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchUsers = () => async dispatch => {
  const res = await axios.get("/admin/api/clients");

  dispatch({ type: FETCH_CLIENTS, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitOrder = (values, history) => async dispatch => {
  const res = await axios.post("/api/orders", values);

  history.push("/client/dashboard/thanks");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitZone = (values, history) => async dispatch => {
  const res = await axios.post("/api/zones", values);

  history.push("/admin/dashboard/zones");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchZones = () => async dispatch => {
  const res = await axios.get("/api/zones");

  dispatch({ type: FETCH_ZONES, payload: res.data });
};

export const updateClient = (values, history, id) => async dispatch => {
  const res = await axios.put(`/admin/api/clients/${id}`, values);

  history.push("/admin/dashboard/clients");
  // dispatch({ type: UPDATE_CLIENT, payload: res.data });
};

export const updateDriver = (values, history, id) => async dispatch => {
  const res = await axios.put(`/admin/api/drivers/${id}`, values);

  history.push("/admin/dashboard/drivers");
  // dispatch({ type: UPDATE_CLIENT, payload: res.data });
};

export const fetchOrders = () => async dispatch => {
  const res = await axios.get("/api/orders");
  dispatch({ type: FETCH_ORDERS, payload: res.data });
};
export const fetchMetrics = () => async dispatch => {
  const res = await axios.get("/admin/api/metrics");
  dispatch({ type: FETCH_METRICS, payload: res.data });
};

export const fetchOrder = id => async dispatch => {
  const res = await axios.get(`/admin/api/orders/${id}`);
  dispatch({ type: FETCH_ORDER, payload: res.data });
};

export const fetchAllOrders = () => async dispatch => {
  const res = await axios.get("/admin/api/all_orders");
  dispatch({ type: FETCH_ALL_ORDERS, payload: res.data });
};

export const submitTruck = (values, history) => async dispatch => {
  const res = await axios.post("/api/trucks", values);

  history.push("/admin/dashboard/trucks");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchTrucks = () => async dispatch => {
  const res = await axios.get("/api/trucks");
  dispatch({ type: FETCH_TRUCKS, payload: res.data });
};

export const fetchDrivers = () => async dispatch => {
  const res = await axios.get("/admin/api/drivers");
  dispatch({ type: FETCH_DRIVERS, payload: res.data });
};

export const fetchSchedules = () => async dispatch => {
  const res = await axios.get("/admin/api/schedules");
  dispatch({ type: FETCH_SCHEDULES, payload: res.data });
};

export const fetchSchedule = () => async dispatch => {
  const res = await axios.get("/driver/api/schedule");
  dispatch({ type: FETCH_SCHEDULE, payload: res.data });
};

export const updateOrder = (values, history, id) => async dispatch => {
  const res = await axios.put(`/admin/api/orders/${id}`, values);

  history.push("/driver/dashboard/updated");
};
