-- Create table for sound machine sessions
CREATE TABLE public.sound_machine_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  child_name TEXT,
  notes TEXT,
  total_sounds INTEGER
);

-- Enable Row Level Security (public access for now since no auth)
ALTER TABLE public.sound_machine_sessions ENABLE ROW LEVEL SECURITY;

-- Create policy for public access (no auth required for this therapeutic app)
CREATE POLICY "Allow public access to sound_machine_sessions"
ON public.sound_machine_sessions
FOR ALL
USING (true)
WITH CHECK (true);

-- Create table for sound machine recordings
CREATE TABLE public.sound_machine_recordings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID NOT NULL REFERENCES public.sound_machine_sessions(id) ON DELETE CASCADE,
  sound_id TEXT NOT NULL,
  audio_url TEXT NOT NULL,
  duration_ms INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.sound_machine_recordings ENABLE ROW LEVEL SECURITY;

-- Create policy for public access
CREATE POLICY "Allow public access to sound_machine_recordings"
ON public.sound_machine_recordings
FOR ALL
USING (true)
WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX idx_sound_machine_recordings_session_id ON public.sound_machine_recordings(session_id);
CREATE INDEX idx_sound_machine_recordings_sound_id ON public.sound_machine_recordings(sound_id);

-- Create trigger for automatic timestamp updates on sessions
CREATE OR REPLACE FUNCTION public.update_sound_machine_sessions_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_sound_machine_sessions_updated_at
BEFORE UPDATE ON public.sound_machine_sessions
FOR EACH ROW
EXECUTE FUNCTION public.update_sound_machine_sessions_updated_at();

-- Create storage bucket for audio recordings
INSERT INTO storage.buckets (id, name, public) 
VALUES ('sound_machine_recordings', 'sound_machine_recordings', true);

-- Create storage policies for the bucket
CREATE POLICY "Public read access for sound_machine_recordings"
ON storage.objects FOR SELECT
USING (bucket_id = 'sound_machine_recordings');

CREATE POLICY "Public upload access for sound_machine_recordings"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'sound_machine_recordings');

CREATE POLICY "Public update access for sound_machine_recordings"
ON storage.objects FOR UPDATE
USING (bucket_id = 'sound_machine_recordings');

CREATE POLICY "Public delete access for sound_machine_recordings"
ON storage.objects FOR DELETE
USING (bucket_id = 'sound_machine_recordings');