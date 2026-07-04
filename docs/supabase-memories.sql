create table if not exists public.memories (
  id uuid primary key default gen_random_uuid(),
  photo text,
  place text,
  date date,
  feeling text,
  joke text,
  song text,
  lesson text,
  created_at timestamptz not null default now()
);

alter table public.memories enable row level security;

drop policy if exists "memories_select_public" on public.memories;
create policy "memories_select_public"
on public.memories
for select
to anon
using (true);

drop policy if exists "memories_insert_public" on public.memories;
create policy "memories_insert_public"
on public.memories
for insert
to anon
with check (true);

drop policy if exists "memories_delete_public" on public.memories;
create policy "memories_delete_public"
on public.memories
for delete
to anon
using (true);
