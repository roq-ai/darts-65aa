import axios from 'axios';
import queryString from 'query-string';
import { DataFileInterface, DataFileGetQueryInterface } from 'interfaces/data-file';
import { GetQueryInterface } from '../../interfaces';

export const getDataFiles = async (query?: DataFileGetQueryInterface) => {
  const response = await axios.get(`/api/data-files${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createDataFile = async (dataFile: DataFileInterface) => {
  const response = await axios.post('/api/data-files', dataFile);
  return response.data;
};

export const updateDataFileById = async (id: string, dataFile: DataFileInterface) => {
  const response = await axios.put(`/api/data-files/${id}`, dataFile);
  return response.data;
};

export const getDataFileById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/data-files/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDataFileById = async (id: string) => {
  const response = await axios.delete(`/api/data-files/${id}`);
  return response.data;
};
