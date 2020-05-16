import { container } from 'tsyringe';

import IStorageProvider from './StoregeProviders/models/IStorageProvider';
import DiskStorageProvider from './StoregeProviders/implementations/DiskStorageProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);
