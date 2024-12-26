import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '../common/Button';

interface AddRepositoryDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (data: RepositoryFormData) => void;
}

interface RepositoryFormData {
  url: string;
  name: string;
  isPrivate: boolean;
}

export function AddRepositoryDialog({ isOpen, onClose, onAdd }: AddRepositoryDialogProps) {
  const [formData, setFormData] = useState<RepositoryFormData>({
    url: '',
    name: '',
    isPrivate: false
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Add Repository</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Repository URL
            </label>
            <input
              type="url"
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="https://github.com/username/repo"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Repository Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="my-awesome-project"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="private"
              checked={formData.isPrivate}
              onChange={(e) => setFormData({ ...formData, isPrivate: e.target.checked })}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="private" className="ml-2 text-sm text-gray-700">
              Private Repository
            </label>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Add Repository
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}