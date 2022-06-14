import React, { useEffect, useState, useMemo } from "react";
import { AlbumForm, AlbumList, AlbumSorter, AlbumToggle } from "../components";

const FavMusicListContainer = () => {
  const [albums, setAlbums] = useState(() => {
    const savedAlbums = localStorage.getItem("albums");
    if (savedAlbums) {
      return JSON.parse(savedAlbums);
    } else {
      return [];
    }
  });

  const [sortBy, setSortBy] = useState(null);

  const sortedAlbums = useMemo(() => {
    if (sortBy) {
      const arr = sortBy.split(" ");
      const field = arr[0];
      const direction = Number(arr[1]);
      const newAlbums = albums.map((album) => ({
        ...album,
        date: new Date(album.date),
      }));
      return newAlbums.sort((a, b) => {
        if (a[field] > b[field]) return 1 * direction;
        if (a[field] < b[field]) return -1 * direction;
        return 0;
      });
    }
    return albums;
  }, [albums, sortBy]);

  useEffect(() => {
    localStorage.setItem("albums", JSON.stringify(albums));
  }, [albums]);

  const handleSubmit = (values) => {
    setAlbums([
      ...albums,
      {
        ...values,
        id: albums.length,
        best: false,
        date: new Date().toJSON(),
      },
    ]);
  };

  const handleRemove = (id) => {
    const afterRemoveAlbums = albums.filter((album) => album.id !== id);
    const refactoredIdAlbums = afterRemoveAlbums.filter((album, index) => {
      album.id = index;
      return true;
    });
    setAlbums(refactoredIdAlbums);
  };

  const handleClickBest = (id) => {
    const updatedAlbums = albums.map((album) =>
      album.id === id ? { ...album, best: !album.best } : album
    );

    setAlbums(updatedAlbums);
  };

  const handleSort = (value) => {
    setSortBy(value);
  };

  return (
    <div>
      <AlbumForm onSubmit={handleSubmit} />
      <AlbumSorter onChange={handleSort} />
      <AlbumToggle />
      <AlbumList
        albums={sortedAlbums}
        onRemove={handleRemove}
        onClickBest={handleClickBest}
      />
    </div>
  );
};

export default FavMusicListContainer;
