import React, { useState, useCallback } from 'react';
import { Alert, CircularProgress, Container, Typography, Button } from '@mui/material';
import UserTable from './components/UserTable';
import UserForm from './components/UserForm';
import { useUsers } from './hooks/userUsers';
import type { User } from './generated/graphql';
 
const App: React.FC = () => {
  const { users, loading, error, createUser, deleteUser, updateUser, refetch } = useUsers();
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);
 
  const handleOpenCreate = () => {
    setEditingUser(null);
    setFormOpen(true);
  };
 
  const handleCreateOrUpdate = useCallback(
    async (data: { name: string; email: string }) => {
      setIsSaving(true);
      try {
        if (editingUser) {
          await updateUser({ variables: { id: editingUser.id, ...data } });
        } else {
          await createUser({ variables: data });
        }
        await refetch();
        setFormOpen(false);
      } catch (err) {
        console.error(err);
      } finally {
        setIsSaving(false);
      }
    },
    [createUser, updateUser, editingUser, refetch]
  );
 
  const handleDelete = useCallback(
    async (id: number) => {
      setDeletingId(id);
      try {
        await deleteUser({ variables: { id } });
        await refetch();
      } catch (err) {
        console.error(err);
      } finally {
        setDeletingId(null);
      }
    },
    [deleteUser, refetch]
  );
 
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>User Management</Typography>
 
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error.message}</Alert>}
 
      {!loading && !error && (
        <>
          <Button variant="contained" sx={{ mb: 2 }} onClick={handleOpenCreate}>
            Create User
          </Button>
 
          <UserTable users={users} onEdit={(u) => { setEditingUser(u); setFormOpen(true); }} onDelete={handleDelete} deletingUserId={deletingId} />
 
          <UserForm
            open={formOpen}
            onClose={() => setFormOpen(false)}
            onSubmit={handleCreateOrUpdate}
            initialData={editingUser || undefined}
            loading={isSaving}
          />
        </>
      )}
    </Container>
  );
};
 
export default App;
 