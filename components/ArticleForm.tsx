'use client';

import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Article } from '@/types/newsTypes';
import { Button, Stack, TextField } from '@mui/material';
import { useAddNewsQuery } from '@/queries/newsQueries';
import useSearch from '@/store/useSearch';
import useNews from '@/store/useNews';
import Loading from '@/components/Loading';

const schema = z.object({
  author: z.string({
    required_error: 'This field is Required',
  }),
  content: z.string(),
  description: z.string(),
  // publishedAt: z.union([z.string(), z.date()]),
  // source: z.object({
  //   id: z.string(),
  //   name: z.string(),
  // }),
  title: z.string(),
  // url: z.string().url(),
  // urlToImage: z.string().url(),
  // id: z.union([z.string(), z.number()]).optional(),
});

type FormData = z.infer<typeof schema>;

type Props = {
  article: Article;
  onClose: () => void;
};

function ArticleForm(props: Props) {
  const {
    article: { author, title, content, description },
    onClose,
  } = props;
  const query = useSearch((state) => state.query);
  const setArticle = useNews((state) => state.setArticle);

  const { mutate, isPending } = useAddNewsQuery(query);

  const initialValue = {
    author: author || '',
    title: title || '',
    content: content || '',
    description: description || '',
  };

  const { handleSubmit, control, reset, formState } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: initialValue,
  });

  const { errors, isDirty } = formState;

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const updatedData = {
      ...props.article,
      ...data,
    };

    // TODO: feature is still in progress
    mutate(updatedData, {
      onSuccess: (_, updatedArticle) => {
        console.log('test ', updatedArticle);
        setArticle(updatedArticle);
        onClose();
      },
    });
  };

  const onReset = () => {
    reset(initialValue);
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className='bg-white p-5 rounded-md relative'
    >
      {isPending && <Loading covered />}
      <Stack spacing={3} width='50%'>
        <Controller
          name='author'
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              {...field}
              label='Author'
              error={!!errors.author}
              helperText={errors.author?.message}
            />
          )}
        />
        <Controller
          name='title'
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              {...field}
              label='Title'
              error={!!errors.title}
              helperText={errors.title?.message}
            />
          )}
        />
        <Controller
          name='content'
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              multiline
              {...field}
              rows={4}
              label='Content'
              error={!!errors.content}
              helperText={errors.content?.message}
            />
          )}
        />
        <Controller
          name='description'
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              multiline
              {...field}
              rows={4}
              label='Description'
              error={!!errors.description}
              helperText={errors.description?.message}
            />
          )}
        />
        <div className='mb-6 max-w-[50%] flex items-center gap-3'>
          <Button
            type='submit'
            variant='outlined'
            color='primary'
            disabled={!isDirty}
          >
            Save
          </Button>
          <Button
            type='button'
            variant='outlined'
            color='warning'
            onClick={onReset}
          >
            Reset
          </Button>
        </div>
      </Stack>
    </form>
  );
}

export default ArticleForm;
